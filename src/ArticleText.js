function ArticleText() {
    return (
        <>
            <article className='article article-text'>
                <h1>Learn to code by<br/>watching others</h1>
                <p>See how experienced developers solve problems in real-time. <br/>Watching scripted tutorials is great, but understanding how<br/>developers think is invaluable.</p>
            </article>
            <article className='article article-form'>
                <div className='advert'><span>Try it free 7 days</span> then $20/mo. thereafter</div>
                <form>
                    <label for='fname'></label>
                    <input type='text' name='fname' id='fname' placeholder='First Name'/>
                    <label for='lname'></label>
                    <input type='text' name='lname' id='lname' placeholder='Last Name'/>
                    <label for='email'></label>
                    <input type='email' name='email' id='email' placeholder='Email Address'/>
                    <label for='password'></label>
                    <input type='password' name='password' id='password' placeholder='Password'/>
                    <input type='submit' id='btn' value='CLAIM YOUR FREE TRIAL' />
                    <small>By clicking the button, you are agreeing to our <span>Terms and Services</span></small>
                </form>
            </article>
        </>
    );
}

export default ArticleText;