<template>
    <Page actionBarHidden="true">
        <GridLayout columns="*" rows="*">
            <FlexboxLayout flexDirection="column" alignItems="center" justifyContent="center">
                <Image class="image" src="res://icon" stretch="none" />
                <Label class="h2 label" :text="$t('main:title')" />
                <FlexboxLayout class="m-t-10" justifyContent="space-between">
                    <Image class="image m-x-5" src="http://www.scopribrescia.com/wp-content/uploads/2016/02/Visitas-guiadas-en-espa%C3%B1ol-Christo-The-Floating-Piers.png" stretch="aspectFill" height="30" width="30" @tap="changeLocale('es')"/>
                    <Image class="image m-x-5" src="https://cdn4.iconfinder.com/data/icons/flag_set/512/br.png" stretch="aspectFill" height="30" width="30" @tap="changeLocale('pt')"/>
                    <Image class="image m-x-5" src="https://image.flaticon.com/icons/png/128/323/323329.png" stretch="aspectFill" height="30" width="30" @tap="changeLocale('en')"/>
                </FlexboxLayout>
                <Button class="button" :text="$t('main:button:start')" @tap="goToLessons" />
                <ActivityIndicator class="m-t-15" :busy="loading" />
            </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

const connectivityModule = require("tns-core-modules/connectivity");

    export default {
        computed: {
            ...mapState([
                'lessons'
            ])
        },
        data() {
            return {
                loading: false,
                checkInternet: ["Revisa tu conexión a Internet", "Verifique sua conexão com a internet", "Check your internet connection"]
            };
        },
        methods: {
            ...mapActions([
                'loadLessons'
            ]),
            goToLessons() {
                let offline = connectivityModule.connectionType.none == connectivityModule.getConnectionType();
                if (offline) {
                    alert({
                        title: this.$i18n.locale == 'es' ? this.checkInternet[0] : this.$i18n.locale == 'pt' ? this.checkInternet[1] : this.checkInternet[2],
                        okButtonText: "OK"
                    })
                } else if (this.lessons.length == 0) {
                    this.loading = true
                    this.loadLessons()
                    .then(r => {
                        this.loading = false
                        this.$navigateTo(this.$routes.Lessons, {
                            props: {
                                lessons: this.lessons
                            }
                        })
                    })
                } else {
                    this.$navigateTo(this.$routes.Lessons, {
                        props: {
                            lessons: this.lessons
                        }
                    })
                }
            },
            changeLocale(locale) {
                this.$i18n.locale = locale;
            }
        }
    };
</script>

<style scoped>
    .label {
        margin-top: 20;
    }

    .button {
        margin-top: 20;
    }
</style>