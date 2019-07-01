<template>
    <Page>
        <ActionBar :title="chapter.name">
          <NavigationButton text="Atrás" android.systemIcon="ic_menu_back" @tap="goBack"/>
        </ActionBar>
        <DockLayout stretchLastChild="false">
            <StackLayout dock="top">
                <FlexboxLayout justifyContent="center" alignItems="center" height="40%">
                    <Image :src="chapter.screens[screenNumber].image_url" stretch="none"/>
                </FlexboxLayout>

                <Label class="hr-light m-b-15"/>

                <Label :text="chapter.screens[screenNumber].text" class="m-x-15 m-y-15"/>

            </StackLayout>
            <Button dock="bottom" height="50" :text="buttonText" :class="buttonClass" @tap="nextScreen"/>
        </DockLayout>
    </Page>
</template>

<script>
    export default {
        props: {
            chapter: {}
        },
        data() {
            return {
                buttonText: 'Siguiente',
                buttonClass: 'btn btn-gray btn-rounded-sm m-x-10 m-y-15',
                screenNumber: 0
            }
        },
        methods: {
            goBack() {
                if (this.screenNumber == 0) {
                    this.$navigateBack()
                } else {
                    if (this.screenNumber == this.chapter.screens.length - 1) {
                        this.buttonClass = 'btn btn-gray btn-rounded-sm m-x-10 m-y-15'
                        this.buttonText = 'Siguiente'
                    }
                    this.screenNumber--
                }
            },
            nextScreen(event) {
                if (this.screenNumber == this.chapter.screens.length - 2) {
                    this.buttonText = 'Quiz!'
                    this.buttonClass = 'btn btn-success btn-rounded-sm m-x-10 m-y-15'
                    this.screenNumber++
                } else if (this.screenNumber == this.chapter.screens.length - 1) {
                    this.$navigateTo(this.$routes.Quiz, {
                        props: {
                            questions: this.chapter.questions
                        }
                    })
                } else {
                    this.screenNumber++
                }
            }
        }
    };
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .btn-gray {
        background-color: #f5f5f5;
        color: black;
    }

    .btn-success {
        background-color: #52b82a;
        color: #ffffff;
    }
</style>