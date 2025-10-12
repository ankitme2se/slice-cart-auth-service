function welcome(name: string) {
    console.log(`Hi ${name}`);
    const user = {
        name: 'Ankit',
    };
    const u1 = user.name;
    return 'name' + u1;
}

welcome('Ankit');
