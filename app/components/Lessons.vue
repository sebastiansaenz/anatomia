<template>
    <Page>
        <ActionBar :title="$t('lessons:title:lessons')">
          <NavigationButton :text="$t('actionbar:back')" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
        </ActionBar>
        <AbsoluteLayout ref="rootLayout">
          <ListView for="lesson in lessons" @itemTap="goToComponent" class="list-group" left="10" top="10" height="97%" width="100%" marginBottom="48">
            <v-template>
              <Label :text="lesson.name" class="list-group-item" />
            </v-template>
          </ListView>
        </AbsoluteLayout>
    </Page>
</template>

<script>
    export default {
      props: {
        lessons: []
      },
      data() {
        return {

        }
      },
      methods: {
        goToComponent(event) {
          this.$navigateTo(this.$routes.Lesson, {
            props: {
              lesson: event.item
            }
          })
        }
      }
    }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
</style>