<script lang="ts" setup>
import { onMounted, ref } from 'vue'
// // You can add any setup logic here if needed; We need to use ref to make the variables reactive in the setup function.
// // When we use ref, we can access the value of the variable using .value.
// // This allows us to create reactive variables that can be used in the template and will automatically update the view when their values change.
//const message = ref('KP : Welcome to KPVueJSWebApp!')
const name = ref('KPVueJSWebApp')
const binaryStatus = ref(true)
const status = ref('active')
const tasks = ref([
  { id: 1, title: 'Task 1', completed: true },
  { id: 2, title: 'Task 2', completed: false },
  { id: 3, title: 'Task 3', completed: true },
])
const toggleBinaryStatus = () => {
  binaryStatus.value = !binaryStatus.value
}
const newTask = ref('React Forms : Text Input')

// // You can add any setup logic here if needed; We need to use ref to make the variables reactive in the setup function.
// // When we use ref, we can access the value of the variable using .value.
// // This allows us to create reactive variables that can be used in the template and will automatically update the view when their values change.
const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'inactive'
  } else {
    status.value = 'active'
  }
}

/// Add Task
// const addTask = () => {
//   if (newTask.value.trim() !== '') {
//     tasks.value.push(newTask.value);
//     newTask.value = '';
//   }
// }
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push({ id: tasks.value.length + 1, title: newTask.value, completed: false })
    newTask.value = ''
  }
}

/// Delete Task
const deleteTask = (index: number) => {
  tasks.value.splice(index, 1)
}

/// onMounted Lifecycle Hook
onMounted(async () => {
  try {
    // // Simulate an API call or any asynchronous operation
    // await new Promise(resolve => setTimeout(resolve, 2000));

    // await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('KP : Data has been fetched successfully:', data)
    //     tasks.value = data.map((task: { id: number; title: string; completed: boolean }) => ({
    //       id: task.id,
    //       title: task.title,
    //       completed: task.completed,
    //     }))
    //   })

    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    console.log('KP : Data has been fetched successfully:', data)
    tasks.value = data.map((task: { id: number; title: string; completed: boolean }) => ({
      id: task.id,
      title: task.title,
      completed: task.completed,
    }))
    console.log('KP : Data has been fetched successfully.')
  } catch (error) {
    console.error('KP : An error occurred while fetching data:', error)
  }
  console.log('KP : Component has been mounted to the DOM.')
})
</script>

<template>
  <div id="app">
    <h1>Welcome to KPVueJSWebApp</h1>
    <p>This is the default main application component for the Vue.js project.</p>
    <p>You can modify this component to add your own content and functionality.</p>
    <br />
    <br />
    <h1>{{ name }}</h1>
    <br />
    <h3>Status Binary :</h3>
    <p v-if="binaryStatus === true">User is active</p>
    <p v-else>User is inactive</p>
    <br />
    <h3>Status :</h3>
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is inactive</p>
    <br />
    <br />
    <h3>Vue Form:</h3>
    <form @submit.prevent="toggleStatus">
      <label for="status">Select Status:</label>
      <select id="status" v-model="status">
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="inactive">Inactive</option>
      </select>
      <button type="submit">Submit</button>
    </form>
    <form @submit.prevent="addTask">
      <label for="newTask">Add Task:</label>
      <input type="text" id="newTask" name="newTask" v-model="newTask" />
      <br />
      <button type="submit">Submit</button>
    </form>
    <br />
    <h3>Tasks Added :</h3>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <!-- <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ task }}
        </span> -->
        <span :style="{}">
          {{ task }}
        </span>
      </li>
    </ul>
    <br />
    <br />
    <h3>Tasks Delete :</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="task.id">
        <!-- <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ task }}
        </span> -->
        <span :style="{}">
          {{ task }}
        </span>
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
    <br />
    <br />
    <h3>Status Binary:</h3>
    <button v-on:click="toggleBinaryStatus">Toggle Binary Status</button>
    <br />
    <br />
    <h3>Status :</h3>
    <button @click="toggleStatus">Toggle Status</button>
    <br />
    <br />
    <h3>Click Links:</h3>
    <a href="https://vuejs.org" target="_blank">Learn Vue.js</a>
    <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA&t=1398s" target="_blank"
      >Click link to Crash Course Vue.js</a
    >
  </div>
</template>

<!-- KP : Vue.js : Lifecycle Methods
  onBeforeMount: This lifecycle hook is called right before the component is mounted to the DOM. It is a good place to perform any setup that needs to happen before the component is rendered.
  onMounted: This lifecycle hook is called after the component has been mounted to the DOM. It is a good place to perform any setup that needs to happen after the component is rendered, such as fetching data from an API or initializing third-party libraries.
  onBeforeUpdate: This lifecycle hook is called right before the component is updated. It is a good place to perform any setup that needs to happen before the component is updated, such as saving the current state of the component or performing any cleanup.
  onUpdated: This lifecycle hook is called after the component has been updated. It is a good place to perform any setup that needs to happen after the component is updated, such as fetching new data from an API or updating the UI based on the new state of the component.
  onBeforeUnmount: This lifecycle hook is called right before the component is unmounted from the DOM. It is a good place to perform any cleanup that needs to happen before the component is removed from the DOM, such as removing event listeners or canceling any ongoing API requests.
  onUnmounted: This lifecycle hook is called after the component has been unmounted from the DOM. It is a good place to perform any cleanup that needs to happen after the component is removed from the DOM, such as clearing any timers or intervals that were set up in the component.
  onActivated: This lifecycle hook is called when a component is activated. It is a good place to perform any setup that needs to happen when the component becomes active, such as fetching data or initializing third-party libraries.
  onDeactivated: This lifecycle hook is called when a component is deactivated. It is a good place to perform any cleanup that needs to happen when the component becomes inactive, such as removing event listeners or canceling any ongoing API requests.
  onErrorCaptured: This lifecycle hook is called when an error is captured from a child component. It is a good place to perform any error handling that needs to happen when an error occurs in a child component, such as logging the error or displaying an error message to the user.
-->

<!-- KP : KP : App01-CompositionAPI.vue is the Default main application component for
      This is a Vue.js component that serves as the main application component for a Vue.js project.
      It includes data properties such as name, binaryStatus, status, tasks, and link.
      The component also has methods to toggle the binaryStatus and status.
      The template section displays the name, status, tasks, and links, and includes buttons to toggle the statuses.
<script lang="ts">
import { ref } from 'vue';

export default {
  //name: 'KPVueJSWebApp',
  setup() {
    // // You can add any setup logic here if needed; We need to use ref to make the variables reactive in the setup function.
    // // When we use ref, we can access the value of the variable using .value.
    // // This allows us to create reactive variables that can be used in the template and will automatically update the view when their values change.
    const message = ref('KP : Welcome to KPVueJSWebApp!');
    const name = ref('KPVueJSWebApp');
    const binaryStatus = ref(true);
    const status = ref('active');
    const tasks = ref([
        { id: 1, title: 'Task 1', completed: true },
        { id: 2, title: 'Task 2', completed: false },
        { id: 3, title: 'Task 3', completed: true },
      ]);
    const  toggleBinaryStatus = () => {
      binaryStatus.value = !binaryStatus.value
    };

    // // You can add any setup logic here if needed; We need to use ref to make the variables reactive in the setup function.
    // // When we use ref, we can access the value of the variable using .value.
    // // This allows us to create reactive variables that can be used in the template and will automatically update the view when their values change.
    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending'
      } else if (status.value === 'pending') {
        status.value = 'inactive'
      } else {
        status.value = 'active'
      }
    };

    return {
      message,
      name,
      binaryStatus,
      status,
      tasks,
      toggleBinaryStatus,
      toggleStatus
    }
}}
</script>

<template>
  <div id="app">
    <h1>Welcome to KPVueJSWebApp</h1>
    <p>This is the default main application component for the Vue.js project.</p>
    <p>You can modify this component to add your own content and functionality.</p>
    <br />
    <br />
    <h1>{{ name }}</h1>
    <br />
    <h3>Status Binary :</h3>
    <p v-if="binaryStatus === true">User is active</p>
    <p v-else>User is inactive</p>
    <br />
    <h3>Status :</h3>
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is inactive</p>
    <br />
    <h3>Tasks:</h3>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ task.title }}
        </span>
      </li>
    </ul>
    <br />
    <h3>Status Binary:</h3>
    <button v-on:click="toggleBinaryStatus">Toggle Binary Status</button>
    <br />
    <br />
    <h3>Status :</h3>
    <button @click="toggleStatus">Toggle Status</button>
    <br />
    <br />
    <h3>Click Links:</h3>
    <a href="https://vuejs.org" target="_blank">Learn Vue.js</a>
    <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA&t=1398s" target="_blank">Click link to Crash Course Vue.js</a>

 </div>
</template> -->

<!-- KP : KP : App01-OptionsAPI.vue is the Default main application component for
      This is a Vue.js component that serves as the main application component for a Vue.js project.
      It includes data properties such as name, binaryStatus, status, tasks, and link.
      The component also has methods to toggle the binaryStatus and status.
      The template section displays the name, status, tasks, and links, and includes buttons to toggle the statuses.
<script lang="ts">
export default {
  name: 'App',
  data() {
    return {
      name: 'KPVueJSWebApp',
      binaryStatus: true,
      status: 'active',
      tasks: [
        { id: 1, title: 'Task 1', completed: true },
        { id: 2, title: 'Task 2', completed: false },
        { id: 3, title: 'Task 3', completed: true },
      ],
      link: 'https://www.youtube.com/watch?v=VeNfHj6MhgA&t=1398s',
    }
  },
  methods: {
    toggleBinaryStatus() {
      this.binaryStatus = !this.binaryStatus
    },
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending'
      } else if (this.status === 'pending') {
        this.status = 'inactive'
      } else {
        this.status = 'active'
      }
    },
  },
}
</script>

<template>
  <div id="app">
    <h1>{{ name }}</h1>
    <br />
    <h3>Status Binary :</h3>
    <p v-if="binaryStatus === true">User is active</p>
    <p v-else>User is inactive</p>
    <br />
    <h3>Status :</h3>
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is inactive</p>
    <br />
    <h3>Tasks:</h3>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ task.title }}
        </span>
      </li>
    </ul>
    <br />
    <h3>Status Binary:</h3>
    <button v-on:click="toggleBinaryStatus">Toggle Binary Status</button>
    <br />
    <br />
    <h3>Status :</h3>
    <button @click="toggleStatus">Toggle Status</button>
    <br />
    <br />
    <h3>Click Links:</h3>
    <a href="https://vuejs.org" target="_blank">Learn Vue.js</a>
    <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA&t=1398s" target="_blank">Click link to Crash Course Vue.js</a>
    <a v-bind:href="link">Crash Course Vue.js</a>
  </div>
</template> -->

<!-- KP : App00.vue is the Default main application component for
    this Vue.js project. It serves as the root component that is
    rendered when the application starts. The component includes a header with a logo, a navigation menu, and a router view to display different components based on the route. The styles are scoped to this component, ensuring that they do not affect other parts of the application.
    This is the Default main application component for a
    Vue.js project.  It includes a header with a logo,
    a navigation menu, and a router view to display
    different components based on the route.
    The component also imports and uses a HelloWorld component
    to display a message. The styles are scoped to this component,
    ensuring that they do not affect other parts of the application.

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/kpmyview">KPMyView</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
