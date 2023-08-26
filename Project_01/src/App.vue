<template>
  <h1>{{ courseName }}s</h1>
  <p>Course by {{ mentor }} </p>
  <button @click="count++">+ </button>
  <p>{{ count }}</p>
  <button @click="count--">-</button>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, repellat nulla vitae quae reiciendis assumenda minus consequuntur hic ratione, qui natus commodi tenetur laboriosam exercitationem rem dolore iste accusamus odit. oh 
  </p>
</template>



<script setup>
  import {ref} from 'vue';
      const courseName= ref("Vue JS 3 Course Namedfd");
      const mentor= ref("Mostafijur");
      let count= ref(0);
</script>