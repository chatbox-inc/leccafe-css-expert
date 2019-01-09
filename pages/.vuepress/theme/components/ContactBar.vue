<template>
    <div>
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
                    <input type='hidden' name='form-name' value='contact'>
                    <div>
                        <label>Message: </label>
                    </div>
                    <textarea name="message" rows="5"></textarea>
                    <input type="hidden" name="url" v-model="href">
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
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
    border: 2px #ccc solid;
    border-bottom: 2px  #FFF solid;
    background: #FFF;
    /*background: #cccccc;*/
    border-radius: 10px 10px 0 0;
}

.contact .form{
    display: none;
    width: 100%;
    height: 100%;
    border: 2px #ccc solid;
    background: #FFF;
    overflow: hidden;
    text-align: left;
    padding: 0 1em;
}

.contact .form p {
    font-size: .9em;
}

.contact .form label {
    display: inline-block;
    margin-bottom: 5px;
}

.contact .form textarea {
    width: 90%;
    font-size: .9em;
}

.contact .form button {
    padding: 5px 1em;
    font-size: .9em;
    background: white;

}

.contact.active {
    width: 30rem;
    height: 20rem;
}
.contact.active .form{
    display: block;
}

</style>