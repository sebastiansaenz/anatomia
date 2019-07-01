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

    export default {
        computed: {
            ...mapState([
                'lessons'
            ])
        },
        data() {
            return {
                loading: false
            };
        },
        methods: {
            ...mapActions([
                'loadLessons'
            ]),
            goToLessons() {
                if (this.lessons.length == 0) {
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