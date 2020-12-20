<template>
    <div class="iconsPack">
        <div class="facebook"><i class=" facebook-icon fab fa-facebook-f"></i></div>
        <div class="twitter"><i class="twitter-icon fab fa-twitter"></i></div>
        <div class="google"><i class=" google-icon fab fa-google-plus-g"></i></div>
        <div class="linkedin"><i class="linkedin-icon fab fa-linkedin-in"></i></div>
        <div class="pinterest"><i class=" pinterest-icon fab fa-pinterest-p"></i></div>
    </div>
</template>

<script>
  export default {
    name: 'Socialite',
  }
</script>

<style lang="scss" scoped>
    .iconsPack {
        list-style-type: none;
        width: 30%;
        display: flex;
        margin-left: 250px;
        justify-content: space-between;
        align-items: center;
        margin-top: 50px;

        .facebook {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #3B5998;
            display: flex;
            align-items: center;
            justify-content: center;

            .facebook-icon {
                color: #fff;
            }

            &:hover {
                border-radius: 50%;
                background-color: #fff;
                transition: all 1s;

                .facebook-icon {
                    color: #3B5998;
                    transition: all 1s;

                }
            }

        }


        .twitter {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #00acee;
            display: flex;
            align-items: center;
            justify-content: center;

            .twitter-icon {
                color: #fff;
            }

            &:hover {
                border-radius: 50%;
                background-color: #fff;
                transition: all 1s;

                .twitter-icon {
                    color: #00acee;
                    transition: all 1s;

                }
            }

        }

        .google {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #cc3333;
            display: flex;
            align-items: center;
            justify-content: center;

            .google-icon {
                color: #fff;
            }

            &:hover {
                border-radius: 50%;
                background-color: #fff;
                transition: all 1s;

                .google-icon {
                    color: #cc3333;
                    transition: all 1s;

                }
            }

        }

        .linkedin {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #0077b5;
            display: flex;
            align-items: center;
            justify-content: center;

            .linkedin-icon {
                color: #fff;
            }

            &:hover {
                border-radius: 50%;
                background-color: #fff;
                transition: all 1s;

                .linkedin-icon {
                    color: #0077b5;
                    transition: all 1s;

                }
            }

        }

        .pinterest {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #bd081c;
            display: flex;
            align-items: center;
            justify-content: center;

            .pinterest-icon {
                color: #fff;
            }

            &:hover {
                border-radius: 50%;
                background-color: #fff;
                transition: all 1s;

                .pinterest-icon {
                    color: #bd081c;
                    transition: all 1s;

                }
            }

        }


    }
</style>