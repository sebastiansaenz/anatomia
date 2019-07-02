<template>
    <Page actionBarHidden="true">
        <GridLayout columns="*" rows="*">
            <FlexboxLayout flexDirection="column" alignItems="center" justifyContent="center">
                <Label class="label" :text="puntaje" />
                <Button class="button" :text="$t('quizcomplete:button:backtolesson')" @tap="goToLesson" />
            </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        props: {
            score: Number,
            lesson: {}
        },
        data() {
            return {

            }
        },
        methods: {
            goToLesson() {
                this.$navigateTo(this.$routes.Lesson, {
                    props: {
                        lesson: this.lesson
                    }
                })
            }
        }
    };
</script>

<style scoped>

    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .label {
        margin-top: 20;
    }

    .button {
        margin-top: 20;
    }
</style>