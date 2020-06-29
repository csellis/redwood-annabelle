// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/actions/new" page={NewActionPage} name="newAction" />
      <Route path="/actions/{id}/edit" page={EditActionPage} name="editAction" />
      <Route path="/actions/{id}" page={ActionPage} name="action" />
      <Route path="/actions" page={ActionsPage} name="actions" />
      <Route
        path="/action-types/new"
        page={NewActionTypePage}
        name="newActionType"
      />
      <Route
        path="/action-types/{id:Int}/edit"
        page={EditActionTypePage}
        name="editActionType"
      />
      <Route
        path="/action-types/{id:Int}"
        page={ActionTypePage}
        name="actionType"
      />
      <Route path="/action-types" page={ActionTypesPage} name="actionTypes" />
      <Route path="/prizes/new" page={NewPrizePage} name="newPrize" />
      <Route
        path="/prizes/{id:Int}/edit"
        page={EditPrizePage}
        name="editPrize"
      />
      <Route path="/prizes/{id:Int}" page={PrizePage} name="prize" />
      <Route path="/prizes" page={PrizesPage} name="prizes" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
      <Route path="/posts/new" page={NewPostPage} name="newPost" />
      <Route path="/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
      <Route path="/posts/{id:Int}" page={PostPage} name="post" />
      <Route path="/posts" page={PostsPage} name="posts" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
