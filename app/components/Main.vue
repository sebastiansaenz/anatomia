<template>
    <Page actionBarHidden="true">
        <GridLayout columns="*" rows="*">
            <FlexboxLayout flexDirection="column" alignItems="center" justifyContent="center">
                <Image class="image" src="res://icon" stretch="none" />
                <Label class="h2 label" :text="$t('main:title')" />
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