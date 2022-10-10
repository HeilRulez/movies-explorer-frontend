<div className="page">
        <Header logOut={handleOut}/>
          <Switch>
            <Route path='/signin'>
              <Login onLogin={onLogin} />
            </Route>
            <Route path='/signup'>
              <Register onRegister={onRegister} />
            </Route>


по роуту / отображается страница «О проекте»;
по роуту /movies отображается страница «Фильмы»;
по роуту /saved-movies отображается страница «Сохранённые фильмы»;
по роуту /profile отображается страница с профилем пользователя;
по роутам /signin и /signup отображаются страницы авторизации и регистрации.




            <ProtectedRoute loggedIn={loggedIn} path='/'
              onCardClick={handleCardClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleDeletePopup}
              component={Main} />
          </Switch>
            <Footer />

            <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

            <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

            <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

            <DeletePopup onDeleteCard={handleCardDelete} isOpen={isDeletePopupOpen} onClose={closeAllPopups} card={cardItem} />

            <InfoTooltip isOpen={isInfoShow} onClose={closeAllPopups} infoMessage={infoMessage} infoState={infoState} />

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>