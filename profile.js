const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true, 
    },
    password: {
        presence: true,
        length: {
            minimum: 8,
            message: "Password must be more than 6 characters."
        },
        
    },
    email: {
        presence: true,
        email: true
    },
}

const app ={
    data(){
        return{
            name: 'Nirawat Poramathumsakul',
            account: '@fxselazy',
            countPost: 1042,
            followers: 73.4,
            following: 153,
            image: './images/profile.png',
            firstname: null,
            lastname: null,
            username: null,
            password: null,
            email: null,
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    username: this.username,
                                    password: this.password,
                                    email: this.email,
                                    },
                                    constraints)
            if(!this.errors){
                alert("Registered successfully.")
            }
        }
    }
}

mountedApp = Vue.createApp(app).mount('#app')