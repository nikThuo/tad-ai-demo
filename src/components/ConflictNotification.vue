<template>
  <div class="conflict-notification p-6 w-full bg-white rounded shadow-sm">
    <h3 class="text-lg font-semibold text-gray-700 mb-4">
      Scheduling Conflicts
    </h3>
    <p class="text-sm text-gray-600 mb-4">
      "Schedule Me" continuously monitors your calendar and promptly notifies
      you of any scheduling conflicts. Easily manage these conflicts by choosing
      to retain, move, or delete the conflicting time slot with just one click.
    </p>
    <div v-for="(conflict, index) in conflicts" :key="index" class="mb-4">
      <p class="text-sm text-gray-700">{{ conflict.message }}</p>
      <div class="mt-2">
        <button
          class="
            mr-2
            py-2
            px-4
            bg-blue-500
            text-white
            rounded
            hover:bg-blue-600
          "
          @click="retainSlot(index)"
        >
          Retain
        </button>
        <button
          class="
            mr-2
            py-2
            px-4
            bg-yellow-500
            text-white
            rounded
            hover:bg-yellow-600
          "
          @click="moveSlot(index)"
        >
          Move
        </button>
        <button
          class="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
          @click="deleteSlot(index)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ConflictNotification',
    data() {
      return {
        conflicts: [
          {
            message:
              'Conflict: Appointment with John Smith overlaps with a staff meeting.',
          },
          {
            message:
              'Conflict: Telehealth session with Jane Doe at the same time as a workshop.',
          },
          {
            message:
              'Conflict: Group therapy session clashes with scheduled personal leave.',
          },
          {
            message:
              'Conflict: Overlapping appointments with Alex Johnson and Chris Lee.',
          },
        ],
      }
    },
    methods: {
      retainSlot(index) {
        console.log('Slot retained:', this.conflicts[index].message)
      },
      moveSlot(index) {
        console.log('Slot moved:', this.conflicts[index].message)
      },
      deleteSlot(index) {
        console.log('Slot deleted:', this.conflicts[index].message)
      },
    },
  }
</script>

<style scoped>
  /* Styling for the ConflictNotification component */
</style>
