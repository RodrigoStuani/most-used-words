<template>
  <v-container fluid>
    <v-form>
      <v-file-input 
        label="Selecione as legendas"
        prepend-icon="mdi-message-text"
        append-outer-icon="mdi-send"
        outlined
        multiple 
        chips 
        v-model="files"
        @click:append-outer="processSubtitles"
      />
    </v-form>
    <div class="pills">
      <Pill v-for="word in groupedWords" :key="word.name"
        :name="word.name" :amount="word.amount"
      />
    </div>
  </v-container>  
</template>

<script>
/**
 * Alterado para renderizar pelo processo do webpack que ao criar ou reagir no backend
 * na execução do ambiente nodejs.
 * 
 * se for pelo import atual do es6 não renderiza, somente com windows e required com electron.
 */
const electron = window.require('electron') 
import Pill from './Pill'

export default {
  components: { Pill },
  data: function () {
    return {
      files: [],
      groupedWords: [
        { name: 'you', amount: 1234 },
        { name: 'I', amount: 952 },
        { name: 'what', amount: 756 },
        { name: 'do', amount: 856 },
      ]
    }
  },
  methods: {
    processSubtitles() {
      console.log(this.files);

      electron.ipcRenderer.send('testeIPC', 'ping')
      electron.ipcRenderer.on('testeIPC', (event, resp) => { console.log(resp) })
    }
  } 
}
</script>

<style>
  .pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>