<template>
    <Page>
        <ActionBar title="Quiz">
          <NavigationButton :text="back" android.systemIcon="ic_menu_back" @tap="goBack"/>
        </ActionBar>
        <StackLayout>
            <Label class="h2 m-y-15 m-x-15" :text="questions[questionNumber].name" />
            <ListView class="m-l-10 m-y-15 list-group" for="answer in answers" @itemTap="selectAnswer" width="100%">
                <v-template>
                    <Label :text="answer.name" class="list-group-item"/>
                </v-template>
            </ListView>
            <Button :text="buttonText" :class="buttonClass" @tap="nextQuestion"/>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        computed: {
            puntajesTotal() {
                return this.puntajes.reduce((total, p) => total + p)
            },
            answers() {
                return this.questions[this.questionNumber].answers
            }
        },
        props: {
            questions: []
        },
        data() {
            return {
                msg: "Quiz",
                buttonText: 'Siguiente',
                buttonClass: 'btn btn-gray btn-rounded-sm m-x-10 m-y-15',
                questionNumber: 0,
                puntajes: [0]
            };
        },
        methods: {
            goBack() {
                if (this.questionNumber == 0) {
                    this.$navigateBack()
                } else {
                    if (this.questionNumber == this.questions.length - 1) {
                        this.buttonClass = 'btn btn-gray btn-rounded-sm m-x-10 m-y-15'
                        this.buttonText = 'Siguiente'
                    }
                    this.questionNumber--
                }
            },
            nextQuestion() {
                if (this.questionNumber == this.questions.length - 2) {
                    this.buttonText = 'Finalizar'
                    this.buttonClass = 'btn btn-success btn-rounded-sm m-x-10 m-y-15'
                    this.questionNumber++
                } else if (this.questionNumber == this.questions.length - 1) {
                    this.$navigateTo(this.$routes.QuizComplete, {
                        props: {
                            puntaje: this.puntajesTotal
                        }
                    })
                } else {
                    this.questionNumber++
                }
            },
            selectAnswer(event) {
                console.log('hola')
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