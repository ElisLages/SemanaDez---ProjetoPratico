const app = ("./src/app")
const door = 8083

app.listen(door, () => {
    console.log(`Application is running at door ${door}`)
})