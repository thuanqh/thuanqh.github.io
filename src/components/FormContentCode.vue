<template>
  <div class="code-container flex font-fira_retina text-menu-text">
    <div class="line-numbers lg:flex flex-col w-16 hidden">
      <!-- line numbers and asteriscs -->
      <div v-for="n in lines" class="grid grid-cols-2 justify-end" :key="n">
        <span class="col-span-1 mr-3">{{ n }}</span>
      </div>
    </div>
    <div class="font-fira_retina text-white text-container">
      <p>
        <span class="tag"> const </span>
        <span class="tag-name"> button </span>
        =
        <span class="tag-name">
          document.querySelector
          <span class="text-menu-text">
            (
            <span class="text-codeline-link"> '#sendBtn' </span>
            );
          </span>
        </span>
      </p>
      <br />
      <p class="text-menu-text">
        <span class="tag"> const </span>
        <span class="tag-name"> message </span>
        = {
        <br />
        &nbsp;&nbsp;
        <span id="name" class="tag-name"> name </span>
        :
        <span class="text-codeline-link">"</span>
        <span id="name-value" class="text-codeline-link">
          {{ contact.name }}
        </span>
        <span class="text-codeline-link">"</span>
        , <br />
        &nbsp;&nbsp;
        <span id="email" class="tag-name"> email </span>
        :
        <span class="text-codeline-link">"</span>
        <span id="email-value" class="text-codeline-link">
          {{ contact.email }}
        </span>
        <span class="text-codeline-link">"</span>
        , <br />
        &nbsp;&nbsp;
        <span id="message" class="tag-name"> message </span>
        :
        <span class="text-codeline-link">"</span>
        <span id="message-value" class="text-codeline-link">
          {{ contact.message }}
        </span>
        <span class="text-codeline-link">"</span>
        , <br />
        &nbsp;&nbsp; date:
        <span class="text-codeline-link"> "{{ date }}" </span>
        <br />
        }
      </p>
      <br />
      <p>
        <span class="tag-name">
          button.addEventListener

          <span class="text-menu-text">
            (
            <span class="text-codeline-link"> 'click' </span>
            ), ()
            <span class="tag"> => </span>
            {
            <br />
          </span>
          &nbsp;&nbsp;form.send
          <span class="text-menu-text">(</span>
          message
          <span class="text-menu-text">); <br />
            })</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from "@nanostores/vue"
import { $contact } from "../store/contacts"

const date = ref(new Date().toDateString())
const lines = ref(0)
const contact = useStore($contact)

function updateLines() {
  const textContainer = document.querySelector(".text-container");
  const style = window.getComputedStyle(textContainer);
  const fontSize = parseInt(style.fontSize);
  const lineHeight = parseInt(style.lineHeight);
  const maxHeight = textContainer.offsetHeight;
  lines.value = Math.ceil(maxHeight / lineHeight);
}

onMounted(() => {
  updateLines();
  window.addEventListener("resize", updateLines);
  window.addEventListener("input", updateLines);
  window.addEventListener("click", updateLines);
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateLines);
  window.removeEventListener("click", updateLines);
  window.addEventListener("input", updateLines);
})
</script>

<style>
.tag {
  color: #c98bdf;
}

.tag-name {
  color: #5565e8;
}

.arrow {
  color: #f8f8f8;
}

.code-container {
  display: flex;
  align-items: flex-start;
}

.line-numbers {
  text-align: right;
}

.text-container {
  width: 100%;
  padding-left: 0px;
  word-wrap: break-word;
}
</style>
