<template>
    <session>hogehoge</session>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            href: ""
        }
    },
    watch:{
        "$route": function(to, from){
            console.log(to,from,this)
            // this.href = location.href;
        }
    },
    computed: {
        contactClass() {
            return {
                "contact" : true,
                "active": this.active
            }
        },
    },
    mounted(){
        // this.href = location.href;
    },
    methods:{
        togglePanel(){
            this.active = !this.active
        }
    }
}
</script>

<style scoped>
.contact {
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    text-align: center;
    width: 9rem;
    height: 2rem;
    padding-top: 1rem;
    bottom: 0;
    right: 2rem;
}

.contact .nob{
    width: 9rem;
    height: 2rem;
    background: #cccccc;
    border-radius: 10px 10px 0 0;
}

.contact .form{
    display: none;
    width: 100%;
    height: 100%;
    background: #cccccc;
    overflow: hidden;
}

.contact.active {
    width: 20rem;
    height: 20rem;
}
.contact.active .form{
    display: block;
}

</style>