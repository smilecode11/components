<template>
    <div>
        <v-calendar 
            mode="multiple"
            :columns="layout.columns"
            :rows="layout.rows"
            :is-expanded="layout.isExpanded"
            :attributes='attrs'
            :from-page="{ month: 1, year: 2021 }"
            @dayclick="onDayClick"
         />
    </div>
</template>

<script>
export default {
    name:'calendar-test',
    data(){
        return {
            form:{},
            selectedDates:['2021-1-1','2021-8-21','2021-8-27','2021-8-25','2021-12-30','2021-12-31']
        }
    },
    methods:{
        onDayClick(date){
            let selectedDates = this.selectedDates;
            const idx = selectedDates.findIndex(d => d === date.id);
            if (idx >= 0) {
                selectedDates.splice(idx, 1);
            } else {
                selectedDates.push(date.id);
            } 
        }
    },
    computed:{
        layout() {
            return this.$screens(
                {
                    default: {
                        columns: 1,
                        rows: 1,
                        isExpanded: true,
                    },  
                    md:{
                        columns:2,
                        rows:6,
                        isExpanded:true
                    }, 
                    lg: {
                        columns: 4,
                        rows: 3,
                        isExpanded: true,
                    },
                },
            );
        },
        attrs(){
            return [
                {
                    key: 'today',
                    highlight: {
                        color:'green'
                    },
                    dot: true,        
                    bar: true,        
                    dates: this.selectedDates,
                    excludeDates: null,
                    order: 0
                }
            ]
        }
  }
}
</script>