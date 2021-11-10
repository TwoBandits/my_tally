<template>
    <div class="bill-detail">
        <header class>
            <div class="logo">记账</div>
            <div class="info">
                <div class="bill-time">
                    <select v-model="year" class="year">
                        <option v-for="(y,i) in years" :key="i" :value="y">{{ y }}</option>
                    </select>
                    <div class="month">
                        <select v-model="month">
                            <option v-for="(m) of 12" :key="m" :value="m">{{ m }}</option>
                        </select>
                    </div>
                </div>
                <div class="total">
                    <div class="income">
                        <span class="title">收入</span>
                    </div>
                    <div class="spending">
                        <span class="title">支出</span>
                    </div>
                </div>
            </div>
        </header>
        <section>
        </section>
        <Nav></Nav>
    </div>
</template>

<script>
import store from '../../store';
import Nav from '../Nav'
export default {
    name: 'BillDetail',
    components: {
        Nav
    },
    data() {
        return {
            years: ['2020', '2021', '2022', '2023'],
            month: '11'
        }
    },
    computed: {
        year: {
            get: function () {
                return store.state.year
            },
            set: function (year) {
                store.commit('changeYear', year)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.bill-detail {
    header {
        background-color: #feba07;
        .logo {
            // width:100%;
            padding: 1.3rem 0;
            letter-spacing: 1.5rem;
            text-align: center;
            font-size: 3.4rem;
            font-weight: 800;
            color: transparent;
            text-shadow: 0px 0px 1px rgba(255, 255, 255, 0.6),
                0px 4px 4px rgba(0, 0, 0, 0.05);
        }

        .info {
            display: flex;

            .bill-time {
                width: 30%;
                padding: 0.8rem 0;
                display: flex;
                position: relative;

                flex-direction: column;
                justify-content: center;
                align-items: center;

                select {
                    width: 100%;
                    background-color: transparent;
                    text-align: center;
                    font-size: 1.4rem;
                }
                .year {
                    width: 4.5rem;
                    appearance: none;
                    font-size: 12px;
                    padding: 0 3px;
                    margin-bottom: 5px;
                }
                .month {
                    width: 4.5rem;
                }

                &::after {
                    content: "";
                    display: block;
                    width: .1rem;
                    height: 2.4rem;
                    background: #333333;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                }
            }

            .total {
                width: 100%;
                padding: 0.4rem 1.6rem;
                display: flex;
                font-size: 1.6rem;

                .income {
                    width: 50%;
                }
            }
        }
    }

    section {
        width: 100%;
        height: 100%;
    }
}
</style>