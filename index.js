function rollDice() {
    return Math.floor(Math.random() * 6) + 1; //random 1-6
}
Vue.createApp({
    data() {
        return {
            nameUser: 'Ta Duy An',
            className: 'A4'
        }
    }
}).mount('#interpolation')
Vue.createApp({
    data() {
        return {
            ImgUrl:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoL050VTrqV3AeVv8tFKfEFNpQrxpoWW1gQ&s',
            linkInfor: 'https://genshin-impact.fandom.com/wiki/Keqing'
        }
    }
}).mount('#bind-attribute')
Vue.createApp({
    methods: {
        taoSoNut() {
            const mangXucXac = [rollDice(), rollDice(), rollDice()];
            return mangXucXac;
        },

        renderTaiXiu() {
            const mangXucXac = this.taoSoNut();
            soNut = mangXucXac.reduce((tong, xucXac) => tong + xucXac, 0);
            // const temp1 = rollDice();
            // const temp2 = rollDice();
            // const temp3 = rollDice();
            // const soNut = temp1 + temp2 + temp3;
            return soNut > 11 ? "Tài" : "Xỉu";
        }
    },
}).mount('#method')
Vue.createApp({
    data() {
        return {
            message: `<h1> hello world </h1>`
        }
    }
}).mount('#raw-html')
Vue.createApp({
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        handleClick(event) {
            console.log(event.target.innerHTML);
            console.log('clicked');
        },
        handleIncrement(parameter) {
            this.count += parameter;
        },
        handleSubmit(){
            alert("submit");
        },
        handleLogin(){
            console.log("login thanh cong");
        }
    }
}).mount('#event')
Vue.createApp({ 
    data() {
        return {
            message: '',
        }
    },
}).mount('#two-way-biding')
Vue.createApp({ 
    data() {
        return {
            count:0,
            lastName: 'Ta',
            firstName: 'Duy An',
        }
    },
    watch: {
        count(newValue) {
            console.log('value', newValue);
            if (newValue === 10) {
                alert('won');
                this.count = 0;
            }
        }
    },
    computed: { 
        fullName() {
            console.log('fullName has been called');
            return this.lastName + ' ' + this.firstName;
        }
    },
    methods: {
        // getFullName() {
        //     return this.lastName + ' ' + this.firstName;
        // },
        handleIncrement() {
            console.log('handleIncrement has been called');
            this.count++;
        }
    }
}).mount('#computed-and-watchers')