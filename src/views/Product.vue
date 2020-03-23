<template>
  <div>
    <h2>Product {{ product }}</h2>

    <input v-model="product" type="text">

    <h2>Items</h2>

    <form v-if="addFormState === 'active'" action="">
      <input v-model="newItem" @keyup.enter="addItem" type="text">
      <button @click="addItem">
        Сохранить элемент
      </button>
      <div>
        {{ neItemCharLength }}
      </div>
    </form>

    <div>
      <button v-if="addFormState === 'inactive'" @click="changeAddFormState('active')">Добавить элемент</button>
      <button v-if="addFormState === 'active'" @click="changeAddFormState('inactive')">Отмена</button>
    </div>

    <ul>
      <!-- :class={in_stock: item.stockAvailability} -->
      <!-- {class: condition} -->
      <li v-for="item in items" @click="toggleStockAvailability(item)" :key="item.id" :class="[item.stockAvailability ? 'in_stock' : 'out_of_stock']">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    data() {
      return {
        product: 'Boots',
        newItem: '',
        addFormState: 'inactive',
        items: [
          {
            id: 0,
            label: 'variant-1',
            stockAvailability: false
          },
          {
            id: 1,
            label: 'variant-2',
            stockAvailability: true
          },
        ]
      }
    },
    computed: {
      neItemCharLength() {
        return this.newItem.length;
      }
    },
    methods: {
      addItem: function() {
        // Можно в Html у кнопки подтверждения указать v-bind:disable="newItem.length === 0",
        // сокращенно :disabled=""
        if (this.newItem.length) {
          this.items.push(this.newItem);
          this.newItem = '';
        }
      },
      changeAddFormState: function(state) {
        this.addFormState = state;
        this.newItem = '';
      },
      toggleStockAvailability: function(item) {
        item.stockAvailability = !item.stockAvailability;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .in_stock {
    color: green;
  }

  .out_of_stock {
    color: #b5b5b5;
  }
</style>
