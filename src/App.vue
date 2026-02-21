<script lang="ts" setup>
import { ref } from 'vue'
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
const newTask = ref('React Forms : Text Input');

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

/// Add Task
// const addTask = () => {
//   if (newTask.value.trim() !== '') {
//     tasks.value.push(newTask.value);
//     newTask.value = '';
//   }
// }
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push({ id: tasks.value.length + 1, title: newTask.value, completed: false });
    newTask.value = '';
  }
}
/// Delete Task
const deleteTask = (index) => {
    tasks.value.splice(index, 1 );

  }

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
      <br/>
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
    <h3>Tasks Deleted :</h3>
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
