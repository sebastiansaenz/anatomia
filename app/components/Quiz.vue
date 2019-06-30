<template>
    <Page>
        <ActionBar title="Quiz">
          <NavigationButton :text="back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
        </ActionBar>
        <GridLayout columns="*" rows="*">
            <FlexboxLayout flexDirection="column" alignItems="center" justifyContent="center">
                <Label class="label" :text="msg" />
            </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                msg: "Quiz"
            };
        },
        methods: {

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