function aaa () {
    return null
}

const bbb = () => null


// this - context object
// call, bind, apply


// call
function getName(num) {
    console.log(this.name, num)
}

const AlexUser = {
    name: 'Alex',
}

const AnnaUser = {
    name: 'Anna',
}

getName.call(AlexUser, 33)

// bind
const getAnnasName = getName.bind(AnnaUser)

getAnnasName(33)

// apply
getName.call(AlexUser, [33])


// closures

const createClosureObj = () => {
    let name = 'name';

    return {
        getName() {
            return name
        },
        setName(newName) {
            if (typeof newName == 'string') {
                name = newName
            } else {
                console.log('Error')
            }
        }
    }
}

const myObj = createClosureObj()

myObj.setName('fewfwfw')


// arr methods
const arr = [1, 2, 3];

arr.push(4) // [1, 2, 3] -> [1, 2, 3, 4]

arr.pop() // [1, 2, 3, 4] -> [1, 2, 3]

const element = arr.shift() // 1

const length = arr.unshift(1) // arr.length