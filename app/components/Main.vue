<template>
    <Page actionBarHidden="true">
        <GridLayout columns="*" rows="*">
            <FlexboxLayout flexDirection="column" alignItems="center" justifyContent="center">
                <Image class="image" src="res://icon" stretch="none" />
                <Label class="label" :text="msg" />
                <Button class="button" :text="textButton" @tap="goToLessons" />
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
                msg: "Aprende anatomía",
                textButton: "Comenzar",
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
            }
        }
    };
</script>

<style scoped>
    .image {

    }

    .label {
        margin-top: 20;
    }

    .button {
        margin-top: 20;
    }
</style>