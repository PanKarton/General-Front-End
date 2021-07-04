const user = (name = `bezimienny`, age = `0`) => {
        const user = {
            firstName: name,
            realAge: age
        }
        return () => {
                console.log(`Elo, ${user.firstName}, ${user.realAge >= 18 ? `piwo za 6zl mordo` : `za mlodyś`}`)
    }
}

const isInAge = user(`Kościej`, 21);