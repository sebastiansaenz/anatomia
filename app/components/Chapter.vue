<template>
    <Page>
        <ActionBar :title="chapter.name">
          <NavigationButton text="Atrás" android.systemIcon="ic_menu_back" @tap="goBack"/>
        </ActionBar>
        <ScrollView>
            <StackLayout>
                <FlexboxLayout justifyContent="center" backgroundColor="#f5f5f5">
                    <Image :src="chapter.screens[screenNumber].image_url" stretch="none" height="200" class="m-t-15"/>
                </FlexboxLayout>

                <Label class="hr-light m-b-15"/>

                <Label :text="chapter.screens[screenNumber].text" class="m-x-10 m-y-15"/>

                <Button :text="buttonText" :class="buttonClass" @tap="nextScreen"/>
            </StackLayout>
        </ScrollView>
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