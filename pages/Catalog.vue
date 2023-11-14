<script lang="ts" setup>
import type { ObjectTableProps } from "../types";
// import { getCatalog } from "@/utils/service";

const route = useRoute();
const catalog = ref<ObjectTableProps>({} as ObjectTableProps);

onMounted(async () => {
    // catalog.value = await getCatalog(route.params.catalogId);
});
</script>

<template>
    <ObjectTable v-bind="catalog" />
</template>

<style lang="scss" scoped>

</style>