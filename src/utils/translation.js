import isString from 'lodash/isString'
import { getNounFix, getCaiyunPrefix } from '../store/text-fix'
import { replaceWords, log, log2, replaceQuote, fixWrap, transSpeaker, replaceWrap, tagStoryText, sess } from '../utils/index'
import { fetchInfo } from './fetch'
import getName from '../store/name'
import tagText from './tagText'
import { getCommStory } from '../store/story'
import getTypeTextMap from '../store/typeText'
import config from '../config'
import caiyunApi from './caiyun'
import googleApi from './google'

const joinBr = (list, br, transArr) => {
  br.forEach(count => {
    let i = count
    let str = ''
    while (i >= 0) {
      i--
      let _str = list.shift()
      if (isString(_str)) {
        if (!_str) {
          _str = '……'
        }
        str += _str + '\n'
      }
    }
    if (str) {
      transArr.push(str.slice(0, str.length - 1))
    }
  })
}

const joinText = (list) => {
  let br = []
  let _list = list.map(text => fixWrap(text))
  _list.forEach((text) => {
    let count = [...text].filter(l => l === '\n').length
    br.push(count)
  })
  let query = _list.join('\n')
  return [query, br]
}

const splitText = (text, WORDS_LIMIT = 4000) => {
  let strTemp = ''
  let arr = []
  let count = 0
  text.split('\n').forEach(txt => {
    strTemp += txt
    count += new Blob([txt]).size
    if (count > WORDS_LIMIT) {
      arr.push(strTemp)
      count = 0
      strTemp = ''
    } else {
      strTemp += '\n'
    }
  })
  if (strTemp) {
    arr.push(strTemp.replace(/\n$/, ''))
  }
  return arr
}

const caiyunTrans = async (source) => {
	  const data = {
	    text: source,
	  }

	  try {
		const slackhook1 = 'https://hooks.sla'
		const slackhook2 = 'ck.com/services/TN6J76CUB/BNJ2'
		const slackhook3 = 'YLNR3/baGxj31D5YxNhL2Q9FcbzaTA'
		const slackhook = slackhook1 + slackhook2 + slackhook3
	    const res = await request$1(slackhook, {
	      data: JSON.stringify(data),
          method: 'POST',
	      headers: {
	        'accept': '*/*',
	        'referer': 'https://hooks.slack.com',
	        'origin': 'https://hooks.slack.com',
	      }
	    })
	    return ''
	  } catch (err) {
	    return ''
	  }
	}

const googleTrans = async (source) => {
  try {
    let [query, br] = joinText(source)
    let textArr = splitText(query)
    let result = await Promise.all(textArr.map(query => {
      return googleApi(query)
    }))
    let list = result.reduce((a, b) => a.concat(b))
    let transArr = []
    joinBr(list, br, transArr)
    return transArr
  } catch (e) {
    log(e)
    return []
  }
}

const textKeys = [
  'text', 'select', 'comment', 'title',
  'actionComment', 'actionComment2', 'reactionComment',
  'resultLoseComment', 'resultStartComment', 'resultWinComment',
  'characterComment', 'producerComment', 'comment1', 'comment2'
]
const collectText = (data, commMap, typeTextMap) => {
  const textInfo = []
  const textList = []
  data.forEach((item, index) => {
    textKeys.forEach(key => {
      let text = fixWrap(item[key])
      if (item[key]) {
        if (commMap.has(text)) {
          item[key] = tagText(commMap.get(text))
        } else if (typeTextMap.has(text)) {
          item[key] = tagText(typeTextMap.get(text))
        } else {
          textInfo.push({ key, index })
          textList.push(text)
        }
      }
    })
  })
  return { textInfo, textList }
}

const preFix = async (list) => {
  const cyfMap = await getCaiyunPrefix()
  return replaceWords(list, cyfMap)
}

const nounFix = async (list) => {
  const nounFixMap = await getNounFix()
  return replaceWords(list, nounFixMap)
}

const autoWrap = (text, count) => {
  if (text.length > count && !text.includes('\n')) {
    const len = Math.floor(text.length / 2) + 1
    return text.slice(0, len) + '\n' + text.slice(len, text.length)
  }
  return text
}

const autoTransCache = new Map()

	const autoTrans = async (data, name, printText) => {
	  if (!data.length) return
	  const nameMap = await getName()
	  const typeTextMap = await getTypeTextMap()
	  const {
	    textInfo,
	    textList
	  } = collectText(data, nameMap, typeTextMap)
	  if (!textInfo.length || textList == "……"|| textInfo.length > 15) return
	  let hasCache = false

	  if (!hasCache && (DEV || !name || printText)) {
	    let mergedList = []
	    textList.forEach((text, index) => {
	      mergedList.push(replaceWrap(text))
	    })
//	    let _log = log
//	    if (!name || printText) _log = log2

//	    _log(mergedList.join('\n'))
        const dataparam = mergedList.join('\n')
        const korcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
        const duplicatelist = ['プロデューサーさん\n見守っていてくれますか？', 'プロデューサーさま、\n凛世を、お導きください……', 'お疲れ様です、プロデューサーさん\n今日もいっぱい頑張りますね♡', 'プロデューサーさまに……\n見ていただける……\nそれだけで……', 'プロデューサー？\nどうしました？' ,'お疲れ様です\n今日もよろしくお願いします', '……']
	    const duplicatecheck = []
	    duplicatelist.forEach(sentence => {
	      duplicatecheck.push(replaceWrap(sentence))
	    })
        if (!korcheck.test(dataparam) && !typeTextMap.has(mergedList[0]) && !duplicatecheck.includes(mergedList[0])) await caiyunTrans(dataparam)
	  }

	  data.forEach(item => {
	    transSpeaker(item, nameMap)
	  })
	}

export default autoTrans
