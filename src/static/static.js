import React from 'react'

const Static = () => {
    return(
        <div className="static">
            <header>
                <div className="header_server_date">
                    04/20/2022 21:37
                </div>
                <div className="header_randomInfo">
                    Jakiś mądry cytat ~ Jakiś mądry człowiek
                </div>
                <div className="header_user">
                    <div className="header_user_avatar">
                        <img src="" alt="user photo" />
                        <div className="header_user_nickname">
                            Nazwa użytkownika
                        </div>
                    </div>
                </div>
            </header>
            <div className="topBar">
                <div className="display_mode_container">
                    <button className="display_button">
                        Tygodniowo
                    </button>
                    <button className="display_button">
                        Miesięcznie
                    </button>
                    <button className="display_button">
                        Rocznie
                    </button>
                </div>
                <div className="display_time_container">
                    <button className="display_time_button">
                        {'<'}
                    </button>
                        Tydzień x/z
                    <button className="display_time_button">
                        {'>'}
                    </button>
                </div>
            </div>
            <main>
                <div className="calendar">
                    <div className="calendar_header">
                        <button className="calendar_header_button">
                            Usuwanie wydarzenia
                        </button>
                        <div className="calendar_header_smartthing">
                            KALENDARZ + Losowe mądre słowo
                        </div>
                        <button className="calendar_header_button">
                            Dodawanie wydarzenia
                        </button>
                    </div>
                    <div className="calendar_cards_container">
                        <div className="calendar_card">Data</div>
                        <div className="calendar_card">Data</div>
                        <div className="calendar_card">Data</div>
                        <div className="calendar_card">Data</div>
                        <div className="calendar_card">Data</div>
                        <div className="calendar_card">Data</div>
                        <div className="calendar_card">Data</div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Static