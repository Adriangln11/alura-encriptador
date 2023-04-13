// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const inputTextArea =  document.getElementById('inputTextArea')
const outputTextArea =  document.getElementById('outputTextArea')
const btnInputContainer = document.getElementById('btnInputContainer')
const btnOutputContainer = document.getElementById('btnOutputContainer')
const primaryBtn = document.getElementById('primaryBtn')
const copyBtn = document.getElementById('copyBtn')
const warningMsg = document.getElementById('warningMsg')
const copyArea = document.getElementById('copyArea')
const outputImage = document.getElementById('outputImage')

const chartsEncrypted = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}

    btnInputContainer.addEventListener('click', e => {
        e.preventDefault()
        if(e.target.id == 'encryptBtn'){
            if(inputTextArea.value == '') return alert('Ingresa un texto')
            const textEncrypted = encrypt(inputTextArea.value)
            showEncrypted(textEncrypted)

        }else if(e.target.id == 'decryptBtn'){
            const textDecrypted = decrypt(inputTextArea.value)
            showEncrypted(textDecrypted)
        }
    })
    copyBtn.addEventListener('click',() => copyToClipboard(outputTextArea.value))

const showEncrypted = phraseEncrypted =>{
    warningMsg.classList.add('d-none')
    outputImage.classList.remove('d-lg-block')
    copyArea.classList.remove('d-none')
    outputTextArea.value = phraseEncrypted
}
const encrypt = phrase => {
    inputTextArea.value = ''
    const splited = phrase.split('')
    let encrypted = []
    for(let letter of splited){
        
        if(Object.keys(chartsEncrypted).includes(letter)){
            letter = chartsEncrypted[letter]
        }
        encrypted.push(letter)

    }
    encrypted = encrypted.join('')
    return encrypted
}

//TODO: Refactor this function, its so ugly...
const decrypt = phrase => {
    inputTextArea.value = ''
    let decrypted = phrase.replaceAll('ober', 'o')
    decrypted = decrypted.replaceAll('enter', 'e')
    decrypted = decrypted.replaceAll('ai', 'a')
    decrypted = decrypted.replaceAll('imes', 'i')
    decrypted = decrypted.replaceAll('ufat', 'u')
    return decrypted
}

const copyToClipboard = async str => {
    try {
        await navigator.clipboard.writeText(str)
      } catch (err) {
        console.error('Error al copiar al portapapeles:', err)
      }
  }