const a = () => {
    setTimeout(() => {
        console.log('First')
        
    }, 2000);
}
const b = () => {
    console.log('Second')
}
a()
b()