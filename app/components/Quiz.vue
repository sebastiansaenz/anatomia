<template>
    <Page>
        <ActionBar title="Quiz">
          <NavigationButton :text="$t('actionbar:back')" android.systemIcon="ic_menu_back" @tap="goBack"/>
        </ActionBar>
        <DockLayout stretchLastChild="false">
            <GridLayout rows="auto" dock="top">
                <Label class="h2 m-y-15 m-x-15" :text="questions[questionNumber].name" />
                <ListView ref="listView" class="m-l-10 m-y-15 list-group" height="80%" for="answer in answers" @itemTap="selectAnswer" width="100%">
                    <v-template>
                        <Label :text="answer.name" :class="$index == currentSelected[questionNumber] ? 'selected list-group-item' : 'list-group-item'"/>
                    </v-template>
                </ListView>
            </GridLayout>
            <Button dock="bottom" :text="questionNumber == questions.length - 1 ? $t('general:button:finish') : $t('general:button:next')" :class="buttonClass" @tap="nextQuestion"/>
        </DockLayout>
    </Page>
</template>

<script>
    export default {
        computed: {
            totalScore() {
                return this.score.reduce((total, p) => total + p) / this.questions.length * 100
            },
            answers() {
                return this.questions[this.questionNumber].answers
            }
        },
        props: {
            questions: [],
            lesson: {}
        },
        data() {
            return {
                buttonClass: 'btn btn-gray btn-rounded-sm m-x-10 m-y-15',
                questionNumber: 0,
                score: [],
                mustSelect: ['Debes seleccionar una respuesta', 'Você deve selecionar uma resposta', 'You must select an answer'],
                nextButton: ['Siguiente', 'Seguinte', 'Next'],
                currentSelected: {}
            }
        },
        methods: {
            goBack() {
                if (this.questionNumber == 0) {
                    this.$navigateBack()
                } else {
                    if (this.questionNumber == this.questions.length - 1) {
                        this.buttonClass = 'btn btn-gray btn-rounded-sm m-x-10 m-y-15'
                        this.buttonText = this.$i18n.locale == 'es' ? this.nextButton[0] : this.$i18n.locale == 'pt' ? this.nextButton[1] : this.nextButton[1]
                    }
                    this.questionNumber--
                }
            },
            nextQuestion() {
                if (this.score[this.questionNumber] === undefined) {
                    alert({
                        title: this.$i18n.locale == 'es' ? this.mustSelect[0] : this.$i18n.locale == 'pt' ? this.mustSelect[1] : this.mustSelect[1],
                        okButtonText: 'OK'
                    })
                    return
                }

                if (this.questionNumber == this.questions.length - 2) {
                    this.questionNumber++
                } else if (this.questionNumber == this.questions.length - 1) {
                    this.$navigateTo(this.$routes.QuizComplete, {
                        props: {
                            score: this.totalScore,
                            lesson: this.lesson
                        }
                    })
                } else {
                    this.questionNumber++
                }
            },
            selectAnswer(event) {
                this.score[this.questionNumber] = event.item.is_correct ? 1 : 0
                this.currentSelected[this.questionNumber] = event.index
                this.$refs.listView.nativeView.refresh()

                if (this.score.length == this.questions.length) {
                    this.buttonClass = 'btn btn-success btn-rounded-sm m-x-10 m-y-15'
                }
            }
        }
    };
</script>

<style scoped>
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

    .selected {
        background-color:  #e4e4e4;
    }
</style>