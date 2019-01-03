<template>
    <section :class="contactClass">
        <div class="nob">
            <a @click="togglePanel" tabindex="">修正を提案</a>
        </div>
        <div class="form">
            <p>
                ドキュメントに不明な点、タイポ等があればお気軽にご連絡ください。
                ご連絡頂いた内容をもとにドキュメントの内容を修正させていただきます。
            </p>
            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label>Message: </label>
                </p>
                <textarea name="message"></textarea>
                <input type="hidden" name="href" v-model="href">
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: "ContactBar",
    data() {
        return {
            active: false,
            href: null
        }
    },
    watch:{
        $route (to, from){
            this.href = location.href;
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
        this.href = location.href;
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