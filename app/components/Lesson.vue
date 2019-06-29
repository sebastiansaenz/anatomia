<template>
    <Page>
        <ActionBar :title="lesson.name">
            <NavigationButton text="Atrás" android.systemIcon="ic_menu_back"
                @tap="$navigateBack" />
        </ActionBar>
        <AbsoluteLayout ref="rootLayout">
            <ListView for="chapter in lesson.chapters" @itemTap="onItemTap"
                left="10" top="10" height="97%" width="100%" marginBottom="48">
                <v-template>
                    <Label :text="chapter.name" @tap="goToComponent(chapter)" />
                </v-template>
            </ListView>
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
            goToComponent(chapter) {
                this.$navigateTo(this.$routes.Chapter, {
                    props: {
                        chapter: chapter
                    }
                });
            }
        }
    };
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    ListView Label {
        height: 48;
        min-height: 48;
    }
</style>