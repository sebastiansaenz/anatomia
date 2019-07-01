<template>
    <Page actionBarHidden="true">
        <GridLayout columns="*" rows="*">
            <FlexboxLayout flexDirection="column" alignItems="center" justifyContent="center">
                <Label class="label" :text="puntaje" />
                <Button class="button" :text="$t('quizcomplete:button:backtolesson')" @tap="goToQuiz" />
            </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        props: ['score'],
        data() {
            return {

            }
        },
        methods: {
            goToQuiz() {
                this.$navigateBack()
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