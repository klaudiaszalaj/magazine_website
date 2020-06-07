import React from 'react';
import { Link } from 'react-router-dom';

class ArticlePage extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
        };  
                                        

    render() {
        const {image, title } = this.props;

        return(
            <div id="articlepage-con">
                <div id="image-container" className={image}></div>
                <div id="article-page-text">
                    <h1>{title}</h1>
                    <h5>written by <Link to="/author-page">Author</Link></h5>
                    <div id="article-page-media">
                        <i className="fas fa-share"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
                <div id="article-page-p">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi!
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi!
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi!
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae modi aliquam, expedita, vel sequi id et iusto provident numquam cum labore. Molestias, recusandae totam magnam facere ad distinctio nisi!
                    </p>
                </div>
            </div>

        )
    }
};


export default ArticlePage