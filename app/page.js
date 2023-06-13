import Image from 'next/image'
import Head from 'next/head';
import styles from './page.module.css'
import Script from 'next/script';

export default function Home() {
  return (

    <main className={styles.main}>
     <Head>
                <title>Canvas</title>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" />
                 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" />
                 <script src="https://cdn.tiny.cloud/1/5zimoo7rrynlf5fvjn3j28pknmysals83mpnpux4hknj4hgq/tinymce/6/tinymce.min.js" />
                 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
     </Head>

      <section id="content">
        <div className="{styles.wrapper}">
          <div className="{styles.flex-container-top}">test</div>
        </div>
        <div class="img-container"><img src="assets/images/earth.png" /></div>
                  <div>
                      <strong>Ethos / Guiding Life Principles</strong><br /><br />
                      <ul>
                        <li>What is the ethos and guiding principles of the organization?</li>
                        <li>How does the organization ethos and guiding principles translate for the collective of teams? (E.g. focus may be Teamwork)</li>
                      </ul>
                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#ethosModal">Edit</button>


                    <div class="modal fade bd-example-modal-lg" id="ethosModal" role="dialog">
                      <div class="modal-dialog modal-lg">


                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Ethos / Guiding Life Principles</h4>
                          </div>
                          <div class="modal-body">
                            <form action="#">
                              <div class="form-group">
                                <label for="content">Update content:</label>
                                <textarea class="form-control" id="ethosContent" rows="10">What is the ethos and guiding principles of the organization? How does the organization ethos and guiding principles translate for the collective of teams? (E.g. focus may be Teamwork)
                                </textarea>
                              </div>
                              <button type="submit" class="btn btn-default">Submit</button>
                            </form>

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>

                      </div>
                    </div>
                    </div>
      </section>
    </main>
  )
}
