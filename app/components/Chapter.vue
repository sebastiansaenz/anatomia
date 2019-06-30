<template>
    <Page>
        <ActionBar :title="chapter.name">
          <NavigationButton text="Atrás" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
        </ActionBar>
        <ScrollView>
            <StackLayout>
                <Image :src="chapter.screens[screenNumber].image_url" stretch="none" height="200" class="m-b-15" />

                <Label row="1" class="hr-light m-t-15 m-b-15"/>

                <Label :text="chapter.screens[screenNumber].text" class="m-t-15 m-b-15"/>

                <Button :text="buttonText" class="m-t-15 m-b-15" @tap="nextScreen"/>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    export default {
        // props: {
        //     chapter: {}
        // },
        data() {
            return {
                buttonText: 'Siguiente',
                chapter: {
                    name: 'Capítulo',
                    screens: [
                        {
                            text: 'Hola1',
                            image_url: 'https://cdn0.iconfinder.com/data/icons/customicondesignoffice5/256/examples.png'
                        },
                        {
                            text: 'Hola2',
                            image_url: 'https://cdn0.iconfinder.com/data/icons/customicondesignoffice5/256/examples.png'
                        },
                        {
                            text: 'Hola3',
                            image_url: 'https://cdn0.iconfinder.com/data/icons/customicondesignoffice5/256/examples.png'
                        }
                    ]
                },
                screenNumber: 0
            }
        },
        methods: {
            nextScreen() {
                if (this.screenNumber == this.chapter.screens.length - 2) {
                    this.buttonText = 'Quiz!'
                    this.screenNumber++
                } else if (this.screenNumber == this.chapter.screens.length - 1) {
                    this.$navigateTo(this.$routes.Quiz)
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

    ListView Label {
        height: 48;
        min-height: 48;
    }
</style>