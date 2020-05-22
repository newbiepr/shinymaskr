import { isDomain, trim } from './utils/index'
import isString from 'lodash/isString'
import isBoolean from 'lodash/isBoolean'
import isPlainObject from 'lodash/isPlainObject'
import { version } from '../package.json'

const PREVIEW_COUNT = 5

const config = {
  origin: 'https://newbiepr.github.io/shinymaskr',
  hash: '',
  localHash: '',
  version: version,
  story: 'normal',
  timeout: 30,
  font1: 'yuanti',
  font2: 'heiti',
  auto: 'off',
  bgm: 'off'
}

const defaultConfig = Object.assign({}, config)

const fontList = ['yuanti', 'heiti', 'yuanti2']

const FONT = {
  HEITI_JA: 'UDKakugo_SmallPr6-B',
  HEITI_TRANS: `sczh-heiti,UDKakugo_SmallPr6-B`,
  YUAN_JA: 'HummingStd-E',
  YUAN_TRANS: `sczh-yuanti,HummingStd-E`
}

const _keys = ['origin', 'font1', 'font2', 'timeout', 'story', 'auto', 'bgm']
const keys = DEV ? _keys.slice(1, _keys.length) : _keys

const setFont = () => {
  FONT.HEITI_TRANS = `${fontList.includes(config.font2) ? 'sczh-' : ''}${config.font2},${FONT.HEITI_JA}`
  FONT.YUAN_TRANS = `${fontList.includes(config.font1) ? 'sczh-' : ''}${config.font1},${FONT.YUAN_JA}`
}

const fixDefault = (data) => {
  if (data.origin === 'https://newbiepr.github.io/shinymaskr') {
    data.origin = defaultConfig.origin
  }
}

const getLocalConfig = () => {
  const str = localStorage.getItem('sczh:setting')
  let setting = JSON.parse(str)
  if (!isPlainObject(setting)) setting = {}
  fixDefault(setting)
  const { origin } = setting
  if (isDomain(origin)) {
    config.origin = origin.trim()
  }
  keys.forEach(key => {
    let value = setting[key]
    if (isString(value)) value = value.trim()
    if (isBoolean(value) || value) {
      config[key] = value
    }
  })

  setFont()
  if (DEV & ENVIRONMENT === 'development') {
    config.origin = 'http://localhost:15944'
  }
}

const saveConfig = () => {
  const data = {}
  keys.forEach(key => {
    if (config[key] !== defaultConfig[key]) {
      data[key] = config[key]
    }
  })
  setFont()
  localStorage.setItem('sczh:setting', JSON.stringify(data))
}

const getConfigFromHash = () => {
  let str = location.hash
  str = str.slice(1).replace(/\?tdsourcetag=s_pc(tim|qq)_aiomsg/, '')
  let arr = str.split(';')
  arr.forEach(_str => {
    let _arr = _str.split('=')
    let k = decodeURIComponent(_arr[0].trim())
    let v = _arr[1] ? decodeURIComponent(_arr[1].trim()) : ''
    if (k && keys.includes(k)) {
      if (v) {
        config[k] = v
      } else {
        config[k] = defaultConfig[k]
      }
      saveConfig()
    }
  })
}

const getLocalHash = () => {
  try {
    const str = sessionStorage.getItem('sczh:data')
    const data = JSON.parse(str)
    config.localHash = data.hash
  } catch (err) {
    // ignore
  }
}

const menuCommand = {
  story: {
    normal: '커뮤 추출 열기', edit: '커뮤 추출 닫기', id: 0,
    callback: () => {
      if (config.story === 'normal') {
        config.story = 'edit'
      } else {
        const btnClose = document.getElementById('btn-close-sczh')
        if (btnClose) {
          btnClose.click()
        } else {
          config.story = 'normal'
        }
      }
    }
  },
  bgm: {
    on: '백그라운드 BGM 끄기', off: '백그라운드 BGM 켜기', id: 0, 
    callback: () => {
      config.bgm = config.bgm !== 'off' ? 'off' : 'on'
    }
  },
  origin: {
    id: 0, title: '접속할 한패 서버 URL 수정(함부로 건들면 한패깨짐)',
    callback: () => {
      const origin = prompt('접속할 URL 입력，아무것도 입력하지 않으면 기본값 자동 설정', config.origin)
      if (origin !== null) {
        config.origin = trim(origin)
      }
    }
  }
}

const menuCommandCb = (cb) => {
  cb()
  saveConfig()
  setAllGMMenuCommand()
}

const setGMMenuCommand = (type) => {
  const value = config[type]
  const data = menuCommand[type]
  const text = data.title || data[value]
  const id = data.id
  if (id) {
    window.GM_unregisterMenuCommand(id)
  }
  data.id = window.GM_registerMenuCommand(text, () => {
    menuCommandCb(data.callback)
  })
}

const setAllGMMenuCommand = () => {
  if (!window.GM_registerMenuCommand || !window.GM_unregisterMenuCommand) return
  const menuCommandList = ['bgm', 'story', 'origin']
  menuCommandList.forEach(type => {
    setGMMenuCommand(type)
  })
}

getLocalConfig()
getLocalHash()
getConfigFromHash()
setAllGMMenuCommand()

window.addEventListener('hashchange', getConfigFromHash)

export { FONT, PREVIEW_COUNT, saveConfig }
export default config
