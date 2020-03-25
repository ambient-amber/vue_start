<template>
    <div>
        <div class="terminal">
            <v-card class="cardClass d-flex flex-column mt-5">
                <v-toolbar class="terminal_title_wrap">
                    <v-toolbar-title>Терминал</v-toolbar-title>
                </v-toolbar>

                <v-text-field
                        placeholder="Введите команду"
                        solo
                        :readonly="loading"
                        :loading="loading"
                        v-model="command"
                        append-icon="mdi-arrow-right-circle"
                        @click:append="send"
                        v-on:keyup.enter="send"
                        class="terminal_input_wrap mt-5 mr-3 ml-3"
                >
                </v-text-field>

                <v-sheet
                        elevation="12"
                        class="terminal_log_wrap mb-5 mr-3 ml-3"
                >
                    <v-textarea id="terminal" rows="15" no-resize v-model="result" v-scroll readonly rounded>
                    </v-textarea>
                </v-sheet>
            </v-card>
        </div>

        <v-row>
            <v-col cols="4"></v-col>
            <v-col cols="4">
                <div class="saveButton">
                    <v-btn bottom color="primary">Сохранить</v-btn>
                </div>
            </v-col>
            <v-col cols="4">
                <div class="saveButton text-right">
                    <v-btn bottom color="primary" @click="$emit('ping', 3)">Reboot</v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "terminal",
        data() {
            return {
                command: '',
                result: '',
                loading: false
            }
        },
        methods: {
            send: async function () {
            }
        }
    }
</script>

<style scoped>
    .cardClass {
        flex: 1;
        margin-left: 5%;
        margin-right: 5%;
    }

    .terminal {
        display: flex;
        height: 100%;
    }

    .terminal_log_wrap {
        flex: 1;
    }

    .terminal_title_wrap,
    .terminal_input_wrap {
        flex: 0;
    }
</style>