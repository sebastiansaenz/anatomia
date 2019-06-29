<template>
    <Page>
        <ActionBar title="Capítulo">
          <NavigationButton text="Atrás" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
        </ActionBar>
        <AbsoluteLayout ref="rootLayout">
          <Label :text="chapter.name" />
        </AbsoluteLayout>
    </Page>
</template>

<script>
    export default {
        props: {
            chapter: {}
        },
        data() {
            return {
                msg: "Aprende anatomía",
                textButton: "Comenzar"
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