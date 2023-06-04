import styled from 'styled-components';

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    animation: open 1s;

    @keyframes open {
        from{
            opacity: 0;
            transform: translateY(-5%);
        }
        to{
            opacity: 1;
            transform: translateY(0%);
        }
    }
    
    main{
        width: 37.7rem;
        background: var(--gray-500);
        padding: 2.4rem;
        border-radius: 1.2rem;
        box-shadow: 0 10px 15px #00000055;

        .profile{
            align-items: center;
            padding-bottom: 2.4rem;
            border-bottom: 1px solid var(--gray-400);
            transition: ease all .5s;
            position: relative;

            div{
                margin-left: 1.6rem;
                flex: 1;
                strong{
                    font-weight: 700;
                    font-size: 1.8rem;
                    line-height: 2.4rem;
                    margin-bottom: .4rem;
                }
                p{
                    color: var(--gray-200);
                    font-size: 1.4rem;
                    line-height: 1.8rem;
                }
            }
            svg{
                position: absolute;
                top: 0;
                right: 0;

                cursor: pointer;
                transition: ease all .5s;
            }
        }
        .profile svg:hover{
            scale: 1.1;
            fill: var(--red);
        }

        .account,
        .preferences,
        .privacity{
            padding: 1.6rem 0;
            border-bottom: 1px solid var(--gray-400);

            p{
                color: var(--gray-300);
                font-size: 1.2rem;
                line-height: 1.2rem;
            }

            div{
                margin-top: 1.2rem;

                .personal-data,
                .login-info,
                .notifications,
                .accessibility,
                .lincked-devices,
                .linked-accounts{
                    justify-content: space-between;
                    align-items: center;
                    padding: .8rem 0;

                    p{
                        align-items: center;
                        gap: .8rem;
                        font-size: 1.6rem;
                        line-height: 2rem;
                        color: var(--gray-100);

                        cursor: pointer;
                        transition: ease all .5s;
                    }

                    svg{
                        cursor: pointer;
                        transition: ease all .5s;
                    }
                }
            }
        }

        .others{
            padding-top: 1.6rem;

            div{

                .help,
                .exit{
                    justify-content: space-between;
                    align-items: center;
                    padding: .8rem 0;

                    p{
                        color: var(--gray-100);
                        align-items: center;
                        gap: .8rem;
                        font-size: 1.6rem;
                        line-height: 2rem;

                        cursor: pointer;
                        transition: ease all .5s;
                    }
                }

                .exit p{
                    color: var(--red);
                }
            }
        }

        .account,
        .preferences,
        .privacity,
        .others{

            div{
                .personal-data:hover,
                .login-info:hover,
                .notifications:hover,
                .accessibility:hover,
                .lincked-devices:hover,
                .linked-accounts:hover,
                .help:hover,
                .exit:hover{
                    
                    p{
                        scale: 1.05;
                        color: var(--purple-100);
                        svg{
                            fill: var(--purple-100);
                        }
                    }

                    svg{
                        scale: 1.1;
                        fill: var(--purple-100);
                    }
                }
            }
        }
    }
`;
