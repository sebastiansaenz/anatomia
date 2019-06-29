<template>
    <Page>
        <ActionBar title="Lección">
          <NavigationButton :text="back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
        </ActionBar>
        <AbsoluteLayout ref="rootLayout">
          <Label :text="lesson.name" />
        </AbsoluteLayout>
    </Page>
</template>

<script>
    export default {
        props: {
            lesson: {}
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