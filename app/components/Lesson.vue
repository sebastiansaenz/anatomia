<template>
    <Page>
        <ActionBar :title="lesson.name">
            <NavigationButton
                v-if="isAndroid"
                android.systemIcon="ic_menu_back"
                @tap="goBack" />
            <ActionItem
                v-else
                :text="$t('actionbar:back')"
                ios.position="left"
                @tap="goBack" />

        </ActionBar>
        <AbsoluteLayout ref="rootLayout">
            <ListView for="chapter in lesson.chapters" @itemTap="onItemTap" class="list-group"
                left="10" top="10" height="97%" width="100%" marginBottom="48">
                <v-template>
                    <Label :text="chapter.name" @tap="goToComponent(chapter)" class="list-group-item" />
                </v-template>
            </ListView>
        </AbsoluteLayout>
    </Page>
</template>

<script>
import { mapState } from 'vuex'
import { isAndroid } from 'tns-core-modules/platform'

    export default {
        computed: {
            ...mapState([
                'lessons'
            ])
        },
        props: {
            lesson: {}
        },
        data() {
            return {
                isAndroid,
            }
        },
        methods: {
            goToComponent(chapter) {
                this.$navigateTo(this.$routes.Chapter, {
                    props: {
                        chapter: chapter,
                        lesson: this.lesson
                    }
                })
            },
            goBack() {
                this.$navigateTo(this.$routes.Lessons, {
                    props: {
                        lessons: this.lessons
                    },
                    backstackVisible: false,
                    clearHistory: true
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
</style>