import { Comment, Media, Profile, User } from '@vsp/core';

export const mockComments: Comment[] = [
  {
    id: '7871d0ff-32f9-4bcd-9b7e-5e15b44d78fd',
    createdBy: {} as User,
    createdOn: new Date(),
    updatedBy: {} as User,
    updatedOn: new Date(),
    deletedOn: null,
    commentedBy: {
      userName: 'email1@email.com',
      profile: {
        avatarUrl: 'https://robohash.org/idessererum.png?size=50x50&set=set1'
      } as Profile
    } as User,
    commentedOn: new Date(),
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 44,
    dislikes: 1,
    children: [
      {
        id: '7871d0ff-32f9-4bcd-9b7e-5e15b44d78fd',
        createdBy: {} as User,
        createdOn: new Date(),
        updatedBy: {} as User,
        updatedOn: new Date(),
        deletedOn: null,
        commentedBy: {
          userName: 'email1@email.com',
          profile: {
            avatarUrl: 'https://robohash.org/idessererum.png?size=50x50&set=set1'
          } as Profile
        } as User,
        commentedOn: new Date(),
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 44,
        dislikes: 1,
        children: null
      } as Comment,
      {
        id: '7871d0ff-32f9-4bcd-9b7e-5e15b44d78fd',
        createdBy: {} as User,
        createdOn: new Date(),
        updatedBy: {} as User,
        updatedOn: new Date(),
        deletedOn: null,
        commentedBy: {
          userName: 'email1@email.com',
          profile: {
            avatarUrl: 'https://robohash.org/idessererum.png?size=50x50&set=set1'
          } as Profile
        } as User,
        commentedOn: new Date(),
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 44,
        dislikes: 1,
        children: null
      } as Comment,
    ]
  } as Comment,
  {
    id: '7871d0ff-32f9-4bcd-9b7e-5e15b44d78fd',
    createdBy: {} as User,
    createdOn: new Date(),
    updatedBy: {} as User,
    updatedOn: new Date(),
    deletedOn: null,
    commentedBy: {
      userName: 'email1@email.com',
      profile: {
        avatarUrl: 'https://robohash.org/idessererum.png?size=50x50&set=set1'
      } as Profile
    } as User,
    commentedOn: new Date(),
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    likes: 10,
    dislikes: 5,
    children: null
  } as Comment,
  {
    id: '7871d0ff-32f9-4bcd-9b7e-5e15b44d78fd',
    createdBy: {} as User,
    createdOn: new Date(),
    updatedBy: {} as User,
    updatedOn: new Date(),
    deletedOn: null,
    commentedBy: {
      userName: 'email1@email.com',
      profile: {
        avatarUrl: 'https://robohash.org/idessererum.png?size=50x50&set=set1'
      } as Profile
    } as User,
    commentedOn: new Date(),
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Officia deserunt mollit anim id est laborum.',
    likes: 2,
    dislikes: 11,
    children: null
  } as Comment,
  {
    id: '7871d0ff-32f9-4bcd-9b7e-5e15b44d78fd',
    createdBy: {} as User,
    createdOn: new Date(),
    updatedBy: {} as User,
    updatedOn: new Date(),
    deletedOn: null,
    commentedBy: {
      userName: 'email1@email.com',
      profile: {
        avatarUrl: 'https://robohash.org/idessererum.png?size=50x50&set=set1'
      } as Profile
    } as User,
    commentedOn: new Date(),
    message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    likes: 11,
    dislikes: 11,
    children: null
  } as Comment,
  {
    id: '7871d0ff-32f9-4bcd-9b7e-5e15b44d78fd',
    createdBy: {} as User,
    createdOn: new Date(),
    updatedBy: {} as User,
    updatedOn: new Date(),
    deletedOn: null,
    commentedBy: {
      userName: 'email1@email.com',
      profile: {
        avatarUrl: 'https://robohash.org/idessererum.png?size=50x50&set=set1'
      } as Profile
    } as User,
    commentedOn: new Date(),
    message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 1,
    dislikes: 2,
    children: [
      {
        id: '7871d0ff-32f9-4bcd-9b7e-5e15b44d78fd',
        createdBy: {} as User,
        createdOn: new Date(),
        updatedBy: {} as User,
        updatedOn: new Date(),
        deletedOn: null,
        commentedBy: {
          userName: 'email1@email.com',
          profile: {
            avatarUrl: 'https://robohash.org/idessererum.png?size=50x50&set=set1'
          } as Profile
        } as User,
        commentedOn: new Date(),
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 44,
        dislikes: 1,
        children: [
          {
            id: '7871d0ff-32f9-4bcd-9b7e-5e15b44d78fd',
            createdBy: {} as User,
            createdOn: new Date(),
            updatedBy: {} as User,
            updatedOn: new Date(),
            deletedOn: null,
            commentedBy: {
              userName: 'email1@email.com',
              profile: {
                avatarUrl: 'https://robohash.org/idessererum.png?size=50x50&set=set1'
              } as Profile
            } as User,
            commentedOn: new Date(),
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            likes: 44,
            dislikes: 1,
            children: null
          } as Comment,
          {
            id: '7871d0ff-32f9-4bcd-9b7e-5e15b44d78fd',
            createdBy: {} as User,
            createdOn: new Date(),
            updatedBy: {} as User,
            updatedOn: new Date(),
            deletedOn: null,
            commentedBy: {
              userName: 'email1@email.com',
              profile: {
                avatarUrl: 'https://robohash.org/idessererum.png?size=50x50&set=set1'
              } as Profile
            } as User,
            commentedOn: new Date(),
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            likes: 44,
            dislikes: 1,
            children: null
          } as Comment,
        ]
      } as Comment,
      {
        id: '7871d0ff-32f9-4bcd-9b7e-5e15b44d78fd',
        createdBy: {} as User,
        createdOn: new Date(),
        updatedBy: {} as User,
        updatedOn: new Date(),
        deletedOn: null,
        commentedBy: {
          userName: 'email1@email.com',
          profile: {
            avatarUrl: 'https://robohash.org/idessererum.png?size=50x50&set=set1'
          } as Profile
        } as User,
        commentedOn: new Date(),
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 44,
        dislikes: 1,
        children: null
      } as Comment,
    ]
  } as Comment,
];

export const mockSimilarVideos: Media[] = [
  
];