<template>
    <Page actionBarHidden="true">
        <GridLayout columns="*" rows="*">
            <FlexboxLayout flexDirection="column" alignItems="center" justifyContent="center">
                <Image class="image" src="res://icon" stretch="none" />
                <Label class="label" :text="msg" />
                <Button class="button" :text="textButton" @tap="goToComponent" />
            </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                msg: "Aprende anatomía",
                textButton: "Comenzar"
            };
        },
        methods: {
            goToComponent() {
                this.$navigateTo(this.$routes.Lessons)
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