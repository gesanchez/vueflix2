<template>
    <input class="
      form-input
      block
      w-full
      rounded
      bg-gray-100
      border-transparent
      focus:border-gray-500
      focus:bg-white
      focus:ring-0"
    @input="$emit('input', $event.target.value)"
    placeholder="Escribe el nombre de tu pelicula"
    />
</template>
