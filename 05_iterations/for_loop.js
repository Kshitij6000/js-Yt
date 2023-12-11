// For Loop 

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

for (let index = 0; index <=20 ; index++) {
    const element = index;
    if (element==5) {
        console.log("Detected the Value 5 !");
        break
    }
    console.log(`Index is ${element}`);
}