<template>
  <header class=" bg-primary-200">
    <div class="container flex flex-row items-baseline justify-between py-4">
      <g-link to="/" class="font-serif text-xl font-medium">
        {{ $static.metadata.siteName }}
      </g-link>
      <nav class="flex flex-row items-baseline justify-end">
        <g-link class="font-medium" to="/about/">About</g-link>
      </nav>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>